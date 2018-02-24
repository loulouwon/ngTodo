import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  newTodo: TodoVO = new TodoVO(); //할일 추가를 위한 모델 데이터
  todoList: Array<TodoVO>; //할일 목록

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getTodoList()
      .subscribe((data: Array<TodoVO>) => {
        console.log(data);
        this.todoList = data;
      });
  }
  addTodo(params: TodoVO){
    this.userService.addTodo(this.newTodo).subscribe((body:TodoVO)  => {
      console.log(body);
      this.todoList.unshift(body); // 방금 입력한것을 맨위에 올린다.
      this.newTodo = new TodoVO();  //폼을 초기화
    });
  }

}
