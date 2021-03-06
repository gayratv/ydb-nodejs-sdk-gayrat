import { declareTypePrim, declareTypeNull, TypedData, Ydb, ITableFromClass } from '@ggvlasov/ydb-sdk';

const TypePrim = Ydb.Type.PrimitiveTypeId;
export const TMDB_TABLE = 'tmdb'; // имя таблицы

type ITMdb = ITableFromClass<Tmdb>;

export class Tmdb extends TypedData {
    @declareTypePrim(TypePrim.UINT64)
    // @ts-ignore  - требуется потому что не инициализировано обязательное поле id
    public id: number;

    @declareTypeNull(TypePrim.UTF8)
    public title?: string;

    @declareTypeNull(TypePrim.JSON)
    public genre_ids?: string;

    @declareTypeNull(TypePrim.DATE)
    public release_date?: Date;

    constructor(data: Record<string, any>) {
        super(data);
    }

    static create(inp: ITMdb) {
        return new Tmdb(inp);
    }
}
