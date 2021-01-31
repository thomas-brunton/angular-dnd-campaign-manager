import { Injectable } from '@angular/core';
import { ApiService } from './apiInterface';
import { DndApiService } from './dndapi.service';
import { VtmApiService } from './vtmapi.service';
import { SettingsService } from '../settings.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSelectorService {
  DND = 'dnd';
  VTM = 'vtm';

  constructor(
    private settingsService: SettingsService,
    private dndApiService: DndApiService,
    private vtmApiService: VtmApiService
  ) { }

  getApi(): ApiService{
    const setting = this.settingsService.getSetting('api');
    switch (setting){
      case(this.DND): {
        return this.dndApiService;
      }
      case(this.VTM): {
        return this.vtmApiService;
      }
      default: {
        return this.dndApiService;
      }
    }
  }
}
