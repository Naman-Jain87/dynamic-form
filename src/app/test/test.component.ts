import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  departments:any = [
    "Sales",
    "Tech",
    "DM",
    "Insurance"
  ]



  hierarchyForm:FormGroup;
  addHierarchy: FormArray | any;
  hierarchyNumber: Array<string> = ['Select Hierarchy', '1', '2', '3', '4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
  constructor(private formBuilder: FormBuilder) {
    this.hierarchyForm = this.formBuilder.group({
      departmentName: ['', [Validators.required]],
      hierLevel: ['', [Validators.required]],
      hierarchyLevel: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
  }

  hierarchyControls(): FormArray {
    return this.hierarchyForm.get('hierarchyLevel') as FormArray;
  }

  addHierarcy(e: any) {
    var value = e.target.value
    this.addHierarchy = (<FormArray>this.hierarchyForm.get('hierarchyLevel')) as FormArray;
    this.addHierarchy.controls = []
    for (let i = 0; i < value; i++) {
      this.addHierarchy.push(this.createFormArray());
    }
  }

  createFormArray(): FormGroup {
    return this.formBuilder.group({
      name: '',
      type: '',

    });
  }
  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  onSubmit(f:any){
  console.log(f.value);
  }

}
