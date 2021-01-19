import ClubItem from "./ClubItem";
import * as S from "./styles"
import ToggleItem from "./CheckItem";
import { ClubItemTableData  } from "../../interfaces";
function ClubItemTable({props} : {props: ClubItemTableData}){
    return(
        <S.Table>
            <S.TableHead>
                <th>
                    <S.TableNameWrapper>
                        <ToggleItem></ToggleItem>
                        <span>{props.user_name}</span>
                    </S.TableNameWrapper>
                </th>
                <S.TableName>신청물품 (1개)</S.TableName>
                <th>수량</th>
                <th>가격</th>
                <th>상태</th>
            </S.TableHead>
            <S.TableBody>
                {
                    props.data.map((i)=>{ 
                        console.log(i);
                        return(<ClubItem props={i}></ClubItem>)
                    })
                }
            </S.TableBody>
        </S.Table>
    )
}
export default ClubItemTable