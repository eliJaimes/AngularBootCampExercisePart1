/* ••[1]••••••••••••••••••••••••• posts-table.component.ts •••••••••••••••••••••••••••••• */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../entities/post.type';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-posts-table',
	styleUrl: './posts-table.component.scss',
	templateUrl: './posts-table.component.html',
})
export class PostsTableComponent implements OnInit, OnDestroy {
	private posts: Array<Post> = [];

	private postsSubscription!: Subscription;

	public constructor(private readonly postsService: PostsService) {}

	/* NOTE: this method will be executed by Angular on component's initialization */
	public ngOnInit(): void {
		this.postsSubscription = this.postsService.getPosts().subscribe({
			error: (error: Error): void => {
				console.error('❌ - Something wrong occurred: %O', error);
				this.posts = [];
			},
			next: (posts: Array<Post>): void => {
				this.posts = posts;
				console.log('this.posts: %O', this.posts);
			},
		});
	}

	/* NOTE: this method will be executed by Angular on component's destruction */
	public ngOnDestroy(): void {
		this.postsSubscription?.unsubscribe();
	}
}
