import { Address } from "./Learn3";
class Customer {
  name: string = "";
  code: string = "";
  address: Array<Address> = null;
}

class CustomerChild extends Customer {}
