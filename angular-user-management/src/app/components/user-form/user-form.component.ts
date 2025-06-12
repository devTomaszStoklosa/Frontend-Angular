import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true,
  providers: [UserService]
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEditMode: boolean = false;
  userId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id'] || 0;
      if (this.userId) {
        this.isEditMode = true;
        this.loadUser();
      }
    });
  }

  loadUser(): void {
    if (this.userId !== null) {
      this.userService.getById(this.userId).subscribe(user => {
        this.userForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      if (this.isEditMode) {
        const updatedUser = { ...user, id: this.userId };
        this.userService.update(updatedUser).subscribe(() => {
          this.router.navigate(['/users']);
        });
      } else {
        this.userService.create(user).subscribe(() => {
          this.router.navigate(['/users']);
        });
      }
    }
  }
}