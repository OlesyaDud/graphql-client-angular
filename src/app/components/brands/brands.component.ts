import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { DELETE_BRAND } from 'src/app/graphql/mutations.graphql';
import { GET_BRANDS } from 'src/app/graphql/queries.graphql';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit, OnDestroy {
  loading: boolean;
  brands: any;
  private querySubscription: Subscription;
  brandsQuery: QueryRef<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandsQuery = this.apollo.watchQuery<any>({
      query: GET_BRANDS,
    });
    this.querySubscription = this.brandsQuery.valueChanges.subscribe(
      ({ data, loading }) => {
        this.loading = loading;
        // console.log(data.findAllBrands);
        this.brands = data.findAllBrands;
        this.refresh();
      }
    );
  }

  refresh(): void {
    this.brandsQuery.refetch();
  }

  onDelete(id: number): void {
    this.apollo
      .mutate({
        mutation: DELETE_BRAND,
        variables: {
          id: id,
        },
      })
      .subscribe(
        () => {
          this.loadBrands();
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
