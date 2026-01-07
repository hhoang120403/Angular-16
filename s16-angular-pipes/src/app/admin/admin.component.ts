import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  studentService: StudentService = inject(StudentService);

  isEditing: boolean = false;
  isInserting: boolean = false;
  stdIdToEdit: number | null = null;

  students: Student[] = [];
  totalMarks: number = 0;

  filterText: string = 'All';

  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.studentService.students.length);
    }, 2000);
  });

  //PROPERTIES FOR INSERTING
  @ViewChild('name') Name: ElementRef | null = null;
  @ViewChild('gender') Gender: ElementRef | null = null;
  @ViewChild('dob') Dob: ElementRef | null = null;
  @ViewChild('course') Course: ElementRef | null = null;
  @ViewChild('marks') Marks: ElementRef | null = null;
  @ViewChild('fee') Fee: ElementRef | null = null;

  //PROPERTIES FOR EDITING
  @ViewChild('editName') editName: ElementRef | null = null;
  @ViewChild('editGender') editGender: ElementRef | null = null;
  @ViewChild('editDob') editDob: ElementRef | null = null;
  @ViewChild('editCourse') editCourse: ElementRef | null = null;
  @ViewChild('editMarks') editMarks: ElementRef | null = null;
  @ViewChild('editFee') editFee: ElementRef | null = null;

  ngOnInit() {
    this.students = this.studentService.filterStudentByGender(this.filterText);
    this.totalMarks = this.studentService.totalMarks;
  }

  onFilterValueChanged(event: any) {
    this.filterText = event.target.value || '';
    this.students = this.studentService.filterStudentByGender(this.filterText);
  }

  OnInsertClicked() {
    this.isInserting = true;
  }
  OnInsertCancelled() {
    this.isInserting = false;
  }
  OnInsertSaved() {
    this.studentService.CreateStudent(
      this.Name?.nativeElement.value || '',
      this.Gender?.nativeElement.value || '',
      this.Dob?.nativeElement.value || '',
      this.Course?.nativeElement.value || '',
      this.Marks?.nativeElement.value || 0,
      this.Fee?.nativeElement.value || 0
    );
    // this.students = this.studentService.students;
    this.students = this.studentService.filterStudentByGender(this.filterText);
    this.isInserting = false;
  }

  OnEditClicked(stdId: number) {
    this.isEditing = true;
    this.stdIdToEdit = stdId;
  }
  OnEditCancelled() {
    this.isEditing = false;
  }

  OnEditSaved(student: Student) {
    student.name = this.editName?.nativeElement.value || '';
    student.gender = this.editGender?.nativeElement.value || '';
    student.dob = this.editDob?.nativeElement.value || '';
    student.course = this.editCourse?.nativeElement.value || '';
    student.marks = this.editMarks?.nativeElement.value || 0;
    student.fee = this.editFee?.nativeElement.value || 0;

    this.students = this.studentService.filterStudentByGender(this.filterText);

    this.isEditing = false;
  }
}
