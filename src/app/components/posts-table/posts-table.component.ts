/* ••[1]••••••••••••••••••••••••• posts-table.component.ts •••••••••••••••••••••••••••••• */

import { Component, OnInit } from '@angular/core';
import { Post } from '../../entities/post.type';
import { PostsService } from '../../services/posts.service';

@Component({
	selector: 'app-posts-table',
	styleUrl: './posts-table.component.scss',
	templateUrl: './posts-table.component.html',
})
export class PostsTableComponent implements OnInit {
	private posts: Array<Post> = [];

	public constructor(private readonly postsService: PostsService) {}

	/* NOTE: this method will be executed by Angular on component's initialization */
	public ngOnInit(): void {
		this.postsService.getPosts().subscribe({
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
}
