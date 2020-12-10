import { Injectable }             from '@angular/core';
import { CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot }    from '@angular/router';

interface GridColumnCommandItem {
    name?: string;
    text?: string;
    className?: string;
    click?: Function;
    permissao?: string;
}

@Injectable()

export class GridButtonService {


    public GetButtons(buttons: GridColumnCommandItem[], tela: string): GridColumnCommandItem[] {
        let returnItens: GridColumnCommandItem[] = [];
        for (let b of buttons) {
            let strpermissao: string = "";
            if (b.permissao != null) {
                strpermissao = b.permissao.toLowerCase();
            }
            var permissao = tela + "." + strpermissao;
            if (b.permissao == null || true) {
                // b.click = (e) => { e.preventDefault(); };
                var index = buttons.indexOf(b);
                returnItens.push(b);
                //buttons.splice(index, 1);
            }  
        }
        return returnItens;
    }

    public GetButton(tela: string, name: string): boolean {
        
        var permissao = tela + "." + name;
        return true;

    }
}
