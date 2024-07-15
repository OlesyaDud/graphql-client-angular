import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { GET_MODELS_BY_BRANDID } from 'src/app/graphql/queries.graphql';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit, OnDestroy {
  loading: boolean;
  models: any;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.params['id'];
    this.loadModelsByBrandId(id);
  }

  loadModelsByBrandId(id: number): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_MODELS_BY_BRANDID,
        variables: {
          brand_id: id,
        },
      })
      .valueChanges.subscribe(
        ({ data, loading }) => {
          this.loading = loading;
          // console.log(data);
          this.models = data.findModelsByBrandId;
        },
        (err) => {
          alert(err);
        }
      );
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}

// ng g c components/models --skip-tests --module app
