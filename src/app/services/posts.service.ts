/* ••[1]••••••••••••••••••••••••• posts.service.ts •••••••••••••••••••••••••••••• */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	private postEndpoint: string = 'https://jsonplaceholder.typicode.com/posts';

	/* NOTE: use 'readonly' is a good practice that prevents changing the injected token by accident */
	public constructor(private readonly httpClient: HttpClient) {}

	public getPosts(): Observable<Array<unknown>> {
		return this.httpClient.get<Array<unknown>>(this.postEndpoint);
	}
}
