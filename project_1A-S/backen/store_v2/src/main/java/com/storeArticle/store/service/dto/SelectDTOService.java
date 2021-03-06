package com.storeArticle.store.service.dto;

import com.storeArticle.store.model.accounts.Bussine;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class SelectDTOService {

    public List<SelectVEO> getBussineDTO(List<Object> bussineList){
        List<SelectVEO> bussineDTOList = new ArrayList<SelectVEO>();
        try{
                bussineList.forEach(BussineData->{
                    Bussine bussine = (Bussine)BussineData;
                    SelectVEO bussineDTOInfo = new SelectVEO();
                    bussineDTOInfo.setValue( new String(bussine.getBussineId()+""));
                    bussineDTOInfo.setLabel((String)bussine.getNameBu());
                    bussineDTOList.add(bussineDTOInfo);
            });
        }catch(Exception e){

        }finally{
        }
        return bussineDTOList;
    }



    public List<SelectVEO> getIdNameDTO(List<Object[]> idNameList){
        List<SelectVEO> selectDTOList = new ArrayList<SelectVEO>();
        try{
            idNameList.forEach(SelectData->{
                SelectVEO selectInfo = new SelectVEO();
                selectInfo.setValue(SelectData[0].toString());
                selectInfo.setLabel(SelectData[1].toString());
                selectDTOList.add(selectInfo);
            });
        }catch(Exception e){
        }finally{
        }
        return selectDTOList;
    }




}
