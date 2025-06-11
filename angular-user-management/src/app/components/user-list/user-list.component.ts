import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAll().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onDelete(userId: number): void {
    this.userService.delete(userId).subscribe(() => {
      this.fetchUsers();
    });
  }

  onEdit(user: User, event: Event): void {
    event.stopPropagation();
    this.router.navigate(['/users/edit', user.id]);
  }

  onAdd(): void {
    this.router.navigate(['/users/new']);
  }
}