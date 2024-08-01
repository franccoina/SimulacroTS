import { ICity } from "../models/city.model"

export class CardTemplate{
    public container: HTMLDivElement

    constructor(container: HTMLDivElement){
        this.container = container
    }

    public renderCard(city: ICity): HTMLDivElement{
        const div = document.createElement('div') as HTMLDivElement
        const title = document.createElement('h3') as HTMLHeadElement
        const country = document.createElement('p') as HTMLParagraphElement
        const description = document.createElement('p') as HTMLParagraphElement

        title.textContent = city.city
        country.textContent = city.country
        description.textContent = city.cityDescription

        div.append(title, country, description)

        this.container.append(div)

        return this.container
    }
}