import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import { ISpinnerState, SpinnerService } from './spinner.service';

@Component({
    selector: 'agl-spinner',
  template: `
<div class="k-loading-panel" *ngIf="_loaderVisible">
                    <div class="k-loading-panel-mask"></div>
                    <div class="k-loading-panel-wrapper">
            <kendo-loader
                [type]="'infinite-spinner'"
                [themeColor]="'primary'"
                [size]="'large'"
            >
            </kendo-loader>
            <div class="k-loading-panel-text">Carregando...</div>
                </div>

            </div>
    `
,styles: [`
        
        /* Loader Panel Styles */
        .k-loading-panel {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
        }
        .k-loading-panel-mask {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #000000;
            opacity: 0.8;
        }
        .k-loading-panel-wrapper {
            position: relative;
            z-index: 2;
        }

        .k-loading-panel-text {
            margin-top: 20px;
            text-align: center;
            color: #ffffff;
        }
    `]})

export class SpinnerComponent implements OnDestroy, OnInit {
  public _loaderVisible: boolean;
    private _spinnerStateChanged: Subscription;

    constructor(private _spinnerService: SpinnerService) { }

  ngOnInit() {
    // inicial para que ele comece com o spinner até que tenha os requests iniciais
    this._loaderVisible = true;
    this._spinnerStateChanged = this._spinnerService.spinnerState.subscribe((state: ISpinnerState) => {
      if (state.show) {
          this._loaderVisible = true;
      } else {
          this._loaderVisible = false;
        }
      });
    }

    ngOnDestroy() {
        this._spinnerStateChanged.unsubscribe();
    }
}
