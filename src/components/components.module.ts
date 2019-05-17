import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserformComponent } from './userform/userform';
@NgModule({
	declarations: [HeaderComponent,
    UserformComponent],
	imports: [],
	exports: [HeaderComponent,
    UserformComponent]
})
export class ComponentsModule {}
