import { Housinglocation } from "./../housinglocation";
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior Photo of {{ housingLocation.name }}"
      />
      <!-- <h1 class="listing-name">{{ housingLocation.name }}</h1> -->
      <h2 class="listing-heading">
         {{ housingLocation.name }}
      </h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;
}
