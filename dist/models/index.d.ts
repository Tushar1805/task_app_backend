import { Sequelize } from "sequelize";
export interface Db {
    [key: string]: any;
    sequelize?: Sequelize;
    Sequelize?: typeof Sequelize;
}
declare const db: Db;
export default db;
//# sourceMappingURL=index.d.ts.map