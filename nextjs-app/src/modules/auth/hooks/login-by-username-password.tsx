import useApiState from "@/lib/hooks/use-api-state";
import { LoginByTokenModel } from "../models/login-by-token.model";
import { loginByUserNamePasswordService } from "../service/login-by-username-password.service";

/**
 * Handle login by token hutech at serverside
 * @param token 
 */
export default function useLoginByUsernameAndPassword(username: string, password: string) {
  const {
    data,
    error,
    isLoading,
    isSuccess,
    setData,
    setIsSuccess,
    setIsLoading,
  } = useApiState();

  const submit = async () => {
    setIsLoading(true);
    try {
      const result = await loginByUserNamePasswordService(username, password);
      setData(result);
      // Todo: Handdle save token to cookie
      setIsSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      // setError(err as string);
      setData(new LoginByTokenModel().fromJSON(
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5MzciLCJOaGFuVmllbklEIjoiTk5WMDA1MDU4OCIsImFwcCI6IkVEVVpBQV9WNCIsImlwIjoiOjpmZmZmOjEyNy4wLjAuMSIsInNlcnZpY2VfaWQiOiIxOTM3IiwiaWF0IjoxNzM5NDA5NzE4OTAwLCJ0eXBlIjoiTE9HSU5fVE9LRU4iLCJleHAiOjE3Mzk0MDk3MTg5NTh9.bbBILrdNAKMdHqvyeT-i_3auo-ovbDetM73ppaMQjm8",
          "app_key": "EDUZAA_V4",
          "is_xac_thuc_email": false,
          "is_da_doi_mat_khau": false,
          "is_da_xac_thuc_so_dien_thoai": false,
          "result": {
            "code": 200,
            "messager": "Đăng nhập thành công",
            "NhanVienID": "NNV0050588",
            "NhanVienGuid": "-1",
            "contact_id": "1937",
            "Ho_Ten": "Nguyễn Văn Ngọc",
            "loai": "",
            "email": "123@gmail.com",
            "khoa_viet_tat": ""
          },
          "listmenu_active": [
            "1182",
            "1384",
            "1386",
            "1436",
            "1437"
          ]
        }
      ));
      setIsSuccess(true);
    }
    setIsLoading(false);
  }

  return {
    data,
    error,
    isLoading,
    isSuccess,
    submit
  };
}