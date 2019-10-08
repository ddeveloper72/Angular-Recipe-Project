import { 
    Component,
    ComponentFactoryResolver,
    ViewChild,
    OnDestroy,
    OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder.directive';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

    private closeSubscription: Subscription;
    private storeSubscription: Subscription;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private store: Store<fromApp.AppState>,
        ) {}
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    ngOnInit() {
        this.storeSubscription  = this.store.select('auth')
        .subscribe(authState => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        if (this.isLoginMode) {
            // authObservable = this.authService.login(email, password);
            this.store.dispatch(new AuthActions.LoginStart({email, password})
            );
        } else {
            this.store.dispatch(new AuthActions.SignupStart({email, password})
            );
        }
        form.reset();
    }

    onHandleError() {
        this.store.dispatch( new AuthActions.HandleError());
    }

    ngOnDestroy() {
        if (this.closeSubscription) {
            this.closeSubscription.unsubscribe();
        }
        if (this.storeSubscription) {
            this.storeSubscription.unsubscribe();
        }
    }

    private showErrorAlert(message: string) {
        const alertComponentFactory = this.componentFactoryResolver
        .resolveComponentFactory(
        AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();

        const componentReference = hostViewContainerRef
        .createComponent(alertComponentFactory);

        componentReference.instance.message = message;
        this.closeSubscription = componentReference.instance.close
        .subscribe(() => {
            this.closeSubscription.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
}
