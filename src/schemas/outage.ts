export interface Outage {
  id: string;
  begin: string;
  end: string;
}

export interface OutageWithDevice extends Outage {
  name: string;
}
