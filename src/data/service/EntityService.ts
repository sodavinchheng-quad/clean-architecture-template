export interface EntityService<TEntity, TModel> {
  validateEntityRunType(obj: TEntity): boolean;
  mapEntityToModel(entity: TEntity): TModel;
}
