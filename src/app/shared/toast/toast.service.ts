import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NotificationRef, NotificationService } from '@progress/kendo-angular-notification';

@Injectable()
export class ToastService {
  private errors: NotificationRef[] = [];

  constructor(private notificationService: NotificationService, private _router: Router) {
        _router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {

            this.errors.forEach(x => x.hide);
            this.errors = [];
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    success(title: string, content: string): void {
      this.notificationService.show({
        content: content,
        hideAfter: 5000,
        position: { horizontal: 'right', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'success', icon: true }
      });
    };

    error(title: string | string[], content: string): void {
        if (Array.isArray(title)) {
          for (let msg of title) {
            this.errors.push( this.notificationService.show({
                content: msg,
                hideAfter: 5000,
                position: { horizontal: 'right', vertical: 'top' },
                animation: { type: 'fade', duration: 400 },
                type: { style: 'error', icon: true }
              }));
            }
        }
        else {
          this.errors.push(this.notificationService.show({
            content: content,
            hideAfter: 5000,
            position: { horizontal: 'right', vertical: 'top' },
            animation: { type: 'fade', duration: 400 },
            type: { style: 'error', icon: true }
          }));
        }
    };

    alert(title: string, content: string): void {
      this.notificationService.show({
        content: content,
        hideAfter: 5000,
        position: { horizontal: 'right', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'warning', icon: true }
      });
    };

    info(title: string, content: string): void {
      this.notificationService.show({
        content: content,
        hideAfter: 5000,
        position: { horizontal: 'right', vertical: 'top' },
        animation: { type: 'fade', duration: 400 },
        type: { style: 'info', icon: true }
      });
    };

}
