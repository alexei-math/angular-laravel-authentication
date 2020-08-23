import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    return this.http.post('http://localhost:8000/auth/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error)

    );
  }
}
