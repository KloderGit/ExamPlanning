import { LoggerService } from './Services/logger.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    constructor(
        private logger: LoggerService
    ){}

    showLoggerMessage(){
        return this.logger.messages.filter( mes => mes.isShow );
    }

    styleVisible(message){
        return message.fadeOut ? 'hidden': 'visible';
    }

    styleOpacity(message){
        return message.fadeOut ? 0 : 1;
    }
}
