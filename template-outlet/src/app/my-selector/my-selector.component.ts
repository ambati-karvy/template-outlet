import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-my-selector",
  templateUrl: "./my-selector.component.html",
  styleUrls: ["./my-selector.component.css"]
})
export class MySelectorComponent implements OnInit{

  ngOnInit() {
    console.log("----")
    console.log(this.options)
  }
  picked: string;

  @Input()
  label: string;
  @Input()
  options: string[];

  @ContentChild("selectedTemplate", { static: false })
  selectedTemplateRef: TemplateRef<any>;

  @ContentChild("optionTemplate", { static: false })
  optionTemplateRef: TemplateRef<any>;

  @Output()
  selectionChanged = new EventEmitter<string>();

  selectOption(option: string) {alert(1)
    this.picked = option;
    this.selectionChanged.emit(option);
  }
}