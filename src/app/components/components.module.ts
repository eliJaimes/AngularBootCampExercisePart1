/* ••[1]••••••••••••••••••••••••• components.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsTableComponent } from './posts-table/posts-table.component';

@NgModule({
	declarations: [PostItemComponent, PostsTableComponent],
	/* NOTE: PostsTableComponent needs to be exported so other modules can see it */
	/* NOTE: PostItemComponent needs to be exported so other modules can see it */
	exports: [PostItemComponent, PostsTableComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}
