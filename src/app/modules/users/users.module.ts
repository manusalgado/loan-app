import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { UsersContainer } from './users.container';
import { UsersRoutingModule } from './users-routing.module';
import { UsersFacade } from './users.facade';
import { UserState } from './store/state/users.state';
import { UsersEffects } from './store/effects/users.effects';
import { UsersRootReducer } from './store/reducers';
import { UsersService } from './users.service';

export const USERS_TOKEN = new InjectionToken<
  ActionReducer<UserState>
>('Feature UserModule Reducers');

@NgModule({
  declarations: [UsersContainer],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('usersModule', USERS_TOKEN),
    EffectsModule.forFeature([UsersEffects]),
    HttpClientModule
  ],
  providers: [
    UsersFacade,
    {provide: USERS_TOKEN, useValue: UsersRootReducer},
    UsersService
  ]
})
export class UsersModule { }
