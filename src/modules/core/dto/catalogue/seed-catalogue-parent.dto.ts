import {IsBoolean, IsUUID} from "class-validator";
import {isBooleanValidationOptions} from "@shared/validation";
import { CatalogueDto } from "./catalogue.dto";

export class SeedCatalogueParentDto extends CatalogueDto {
    @IsUUID()
    readonly parentId: string;
}