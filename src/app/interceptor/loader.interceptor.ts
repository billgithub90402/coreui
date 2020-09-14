import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { SpinnerOverlayService } from '../spinner-overlay/spinner-overlay.service';
import { map } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private spinnerOverlayService: SpinnerOverlayService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerOverlayService.show();
        return next.handle(request).pipe(
            map(resp => {
                this.spinnerOverlayService.hide();
                if (resp instanceof HttpResponse) {
                    return resp.clone({ body: [{ title: 'Replaced data in interceptor' }] });
                }
            })
        );
    }
}
