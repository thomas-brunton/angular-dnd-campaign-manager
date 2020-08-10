import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api_services/apiInterface';
import { ApiSelectorService } from '../api_services/api-selector.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  public caption = 'Class';
  public headers: string[];
  public tableTopClasses: JSON[];
  apiService: ApiService;

  public apiSetting = 'dnd';

  constructor(private apiSelectorService : ApiSelectorService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.apiService = this.apiSelectorService.getApi(this.apiSetting);
    this.apiService.getClasses()
      .subscribe(tableTopClasses => {
        this.tableTopClasses = tableTopClasses['results'];
        for(let tableTopClass of this.tableTopClasses) {
          this.headers = Object.keys(tableTopClass);
          break;
        }
        console.log(tableTopClasses);
      });
  }

  setApiSetting(newValue) {
    this.apiSetting = newValue;
  }

  getApiSetting() {
    return this.apiSetting;
  }

  onSettingChange(newValue) {
    this.apiSetting = newValue;
    this.getClasses();
  }

  addClass(entry: JSON): void {
    this.tableTopClasses.push(entry);
  }

}
