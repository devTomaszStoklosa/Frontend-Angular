import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  standalone: true
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getById(+id).subscribe(user => {
        this.user = user;
      });
    }
  }
}