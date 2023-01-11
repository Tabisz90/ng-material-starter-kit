import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import {JobPostModel} from '../../models/job-post.model';
import {JobPostsService} from '../../services/job-posts.service';

@Component({
  selector: 'app-jobs-search',
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsSearchComponent {
  readonly params$: Observable<string> = this._activatedRoute.queryParams.pipe(map((params) => params['corporate']));
  readonly jobPosts$: Observable<JobPostModel[]> = combineLatest([this.params$, this._jobPostsService.getAll()])
    .pipe(map(([corporate, jobPosts]: [string, JobPostModel[]]) => jobPosts.filter((jobPost) =>
      corporate ? jobPost.title.toLowerCase().trim().includes(corporate.toLowerCase().trim()) ||
        jobPost.description.toLowerCase().trim().includes(corporate.toLowerCase().trim()) ||
        jobPost.id.toLowerCase().trim().includes(corporate.toLowerCase().trim())
        : ''
    )));

  constructor(private _activatedRoute: ActivatedRoute, private _jobPostsService: JobPostsService) {
  }
}
