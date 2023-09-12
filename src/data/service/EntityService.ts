export interface EntityService<TEntity, TModel> {
  validateEntityRunType(obj: TEntity): void;
  mapEntityToModel(entity: TEntity): TModel;
}
