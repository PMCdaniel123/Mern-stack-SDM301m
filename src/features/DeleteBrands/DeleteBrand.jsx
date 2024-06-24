import { Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { closePopup } from "@/store/reducers/popupReducer";
import ConfigAntdButton from "@/components/Button/ConfigAntdButton";
import { useDeleteBrand } from "./useDeleteBrand";

const DeleteBrand = ({ id, name }) => {

    const dispatch = useDispatch();
    const deleteBrand = useDeleteBrand(id)

    const handleCancel = () => {
        dispatch(closePopup("Delete Brand"));
    }

    const handleDelete = () => {
        deleteBrand.mutate()
    }

    return (
        <div className="px-6 py-2">
            <Typography.Text>Are you sure to delete brand {name}?</Typography.Text>
            <div className="flex flex-row gap-1 justify-center p-4 mt-2">
                <ConfigAntdButton type="danger">
                    <Button type="primary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </ConfigAntdButton>
                <ConfigAntdButton>
                    <Button type="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </ConfigAntdButton>
            </div>
        </div>
    );
};

export default DeleteBrand;
