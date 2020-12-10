export class CultureService {
    private currentCulture: string = null;

    public getCurrentCulture():string {
        if (this.currentCulture) {
            return this.currentCulture.toUpperCase();
        }
        return navigator.language.split('-')[0].toUpperCase();
    }
    public setCurrentCulture(culture: string): void {
        this.currentCulture = culture;
    }
}