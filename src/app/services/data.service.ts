import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'My name is Aaron Brown.',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite color?',
    //     answer: 'My favorite color is Red.',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite book?',
    //     answer: 'My favorite book is The Silmarillion',
    //     hide: true
    //   }
    // ];
  }

  // Get Questions from LocalStorage
  getQuestions() {
    if (localStorage.getItem('question') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('question'));
    }
    return this.questions;
  }

  // Add Question to LocalStorage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Init local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LocalStorage
      localStorage.setItem('question', JSON.stringify(questions));

    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Reset LocalStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove Question from LocalStorage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
