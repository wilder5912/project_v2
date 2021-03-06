package com.storeArticle.store.service.enumPage;

public enum GroupProductQueryEnum {

    getProductoGroupList("select groupProduct FROM GroupProduct as groupProduct where groupProduct.isDelete = false"),
    getNameGroupProductHql("select groupProduct FROM GroupProduct as groupProduct  " +
            "where groupProduct.bussineId.bussineId = ? " +
            "and groupProduct.nameGroup = ? "),
    getGroupProductBsussineIdHql("select groupProduct.groupId,groupProduct.nameGroup FROM GroupProduct as groupProduct  " +
                                   "where groupProduct.bussineId.bussineId = ? " +
                                   "and groupProduct.isDelete = ? ");


    private String hql;

    GroupProductQueryEnum(String hql) {
        this.hql = hql;
    }

    public String getHql() {
        return hql;
    }

    public void setHql(String hql) {
        this.hql = hql;
    }
}
