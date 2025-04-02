import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
    selector: 'app-missionfilter',
    templateUrl: './missionfilter.component.html',
    styleUrl: './missionfilter.component.css',
    imports: [FormsModule]
})
export class MissionfilterComponent {
    @Output() filterByYear = new EventEmitter<string>();
    launchYear: string = '';

    emitFilter(): void {
        this.filterByYear.emit(this.launchYear);
    }
}