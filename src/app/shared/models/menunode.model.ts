
export class MenuNode {
  public Text: string = null;
  public Url: string = null;
  public Icon: string = null;
  public Expanded: boolean = false;
  public UlChildrenCssClass: string = '';
  public Childrens: MenuNode[];
}
