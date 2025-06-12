import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  displayedColumns: string[] = ['name', 'surname', 'email', 'actions'];

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