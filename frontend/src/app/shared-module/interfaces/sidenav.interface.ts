// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface ISidenav {
  isSidenavLeftVisible: boolean;
  isSidenavRightVisible: boolean;
  sidenavMode: string;
}

export interface ISidenavRecord extends TypedRecord<ISidenavRecord>, ISidenav { };

