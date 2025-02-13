export class LoginByTokenModel {
  token: string = '';
  list_menu: Array<number> = [];
  user_info: {
    NhanVienID?: string;
    NhanVienGuid?: string;
    contact_id?: string;
    Ho_Ten?: string;
    loai?: string;
    email?: string;
    khoa_viet_tat?: string;
  } = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromJSON(json: any): LoginByTokenModel {
    this.token = json.token ?? '';
    this.list_menu = json.listmenu_active ?? [];
    this.user_info = {
      NhanVienID: json.result?.NhanVienID ?? '',
      NhanVienGuid: json.result?.NhanVienGuid ?? '',
      contact_id: json.result?.contact_id ?? '',
      Ho_Ten: json.result?.Ho_Ten ?? '',
      loai: json.result?.loai ?? '',
      email: json.result?.email ?? '',
      khoa_viet_tat: json.result?.khoa_viet_tat ?? '',
    };
    return this;
  }
}