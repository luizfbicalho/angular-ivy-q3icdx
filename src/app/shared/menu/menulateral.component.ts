import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/menu.model';
import { MenuLateralService } from './menulateral.service'

import { MenuNode } from '../models/menunode.model';
import { PanelBarExpandMode, PanelBarItemModel } from '@progress/kendo-angular-layout';
import { UserTokenService } from 'local/shared/services/user.token.service';


@Component({
  selector: 'agl-menulateral',
  templateUrl: './menulateral.component.html'
})
export class MenuLateralComponent implements OnInit {
  models: Menu[];
  pai: Menu = new Menu();
  nodesMenu: MenuNode[];
  ulclass: string = 'collapse list-unstyled';

  constructor(private _router: Router, private _route: ActivatedRoute, private _menuLateralService: MenuLateralService,private _userTokenService: UserTokenService) {
  }

  ngOnInit(): void {
    if (this._userTokenService.getTokenObject()) {
      this.carregarMenu();
    }
    this._userTokenService.tokenState.subscribe(x => {
      this.carregarMenu();
    });
  }

  private carregarMenu() {
    this._menuLateralService.getMenuUsuario().subscribe(x => {
      this.models = this.acertarFilhos(x);
      this.nodesMenu = this.carregaNodes(this.models);
    }, error => { });
  }

  private acertarFilhos(models: Menu[]): Menu[] {
    for (let m of models) {
      m.Filhos = [];
    }    
    for (let m of models) {
      for (let f of models) {
        if (f.Pai && f.Pai.Id == m.Id) {
          m.Filhos.push(f);
          m.Filhos = m.Filhos.sort((a, b) => a.Ordem - b.Ordem);
        }
      }
    }
    return models.filter(m => !m.Pai).sort((a, b) => a.Ordem - b.Ordem);
  }

  private carregaNodes(models: Menu[]): MenuNode[] {
    let nodes: MenuNode[] = [];
    for (let m of models) {
      let node = new MenuNode();
      node.Url = m.Url;
      node.Icon = m.Icone;
      node.Text = m.Descricao;
      if (m.Filhos.length > 0) {
        node.UlChildrenCssClass = 'list-unstyled collapse';
        node.Childrens = this.carregaNodes(m.Filhos);
      }
      nodes.push(node);
    }
    return nodes;
  }
  clickItem(e: MenuNode) {
    if (!e.Childrens) {
      this._router.navigate([e.Url]);
    } else {
      e.Expanded = !e.Expanded;
      if (e.Expanded) {
        e.UlChildrenCssClass = 'list-unstyled collapse show';
      } else {
        e.UlChildrenCssClass = 'list-unstyled collapse';
      }
    }
  }
}
