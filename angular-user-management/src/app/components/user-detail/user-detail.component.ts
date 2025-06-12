import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  standalone: true,
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.userService.getById(+id).subscribe(user => {
        this.user = user;
      });
    }
  }

  onUserAdded() {
    this.toastr.success('Użytkownik został dodany!', 'Sukces');
  }
}