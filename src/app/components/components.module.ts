/* ••[1]••••••••••••••••••••••••• components.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsTableComponent } from './posts-table/posts-table.component';

@NgModule({
	declarations: [PostsTableComponent],
	/* NOTE: PostsTableComponent needs to be exported so other modules can see it */
	exports: [PostsTableComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}
