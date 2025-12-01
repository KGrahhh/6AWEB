import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = 'Data Binding Demonstration';
  imageUrl = 'lbj.jpg';
  w = 500;
  h = 500;
  altText = "Angular Logo";
  isHighlighted = true;

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  studentName = "Khristian Pradilla";
  score = 95;
  yourName = "";

  get isPassing() {
    return this.score >= 75;
  }
  imageUrl2 = 'speed.jpg';
  isDisabled = true;

  colSpanValue = 3;

  boxColor = "red";
  boxSize = "150px";
}