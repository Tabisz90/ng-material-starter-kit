export interface Pagination {
  readonly pageSize: number;
  readonly pageNumber: number;
  readonly pageSizeOptions: number[],
  readonly length: number,
}
