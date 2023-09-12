export interface IEntityService<TEntity, TModel> {
  validateEntityRunType(obj: TEntity): boolean;
  mapEntityToModel(entity: TEntity): TModel;
}
