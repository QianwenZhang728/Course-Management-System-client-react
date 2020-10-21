import React from "react";
import {connect} from "react-redux";
import moduleService from "../services/ModuleService"
import {Link} from "react-router-dom";

const ModuleListComponent = (
    {
        selectedModuleId,
        course={},
        modules=[],
        deleteModule,
        createModule,
        updateModule,
        edit,
        ok,
        selectModule
    }) =>
    <div>
        <nav className="nav nav-pills flex-column wbdv-module-list">
            <ul>
                {
                    modules.map(module =>
                        <li href="#" key={module._id}
                            // className="nav-item nav-link wbdv-module-item wbdv-module-item-title "
                            className={module._id === selectedModuleId? "nav-link wbdv-module-item wbdv-module-item-title selected" : "nav-item nav-link wbdv-module-item wbdv-module-item-title"}>
                            {
                                !module.editing &&
                                <span>
                              <Link to={`/course/${course._id}/modules/${module._id}`} className="link"
                              onClick={() => selectModule(module)}
                              // className={module.selected? "link selected" : "link"}
                              >
                                {module.title}
                              </Link>
                                <i onClick={() => edit(module)} className="fa fa-pencil btn pull-right"></i>
                            </span>
                            }
                            {
                                module.editing &&
                                <span>
                                <input
                                    onChange={(event) => updateModule({
                                        ...module,
                                        title: event.target.value
                                    })}
                                    value={module.title}/>

                                <i onClick={() => ok(module)} className="fa fa-check btn  pull-right wbdv-module-item-delete-btn"></i>
                                <i onClick={() => deleteModule(module)} className="fa fa-times btn  pull-right wbdv-module-item-delete-btn"></i>
                            </span>
                            }
                        </li>
                    )}
            </ul>
            <i  onClick={() => createModule(course)} className="fa fa-plus btn wbdv-module-item-add-btn"></i>
        </nav>
    </div>


const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course: state.courseReducer.course,
    selectedModuleId: state.moduleReducer.selectedModuleId
})

const propertyToDispatchMapper = (dispatch) => ({
    ok: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: false
        }).then(status => dispatch({
            type: "UPDATE_MODULE",
            module: {...module, editing: false}
        })),
    edit: (module) =>
        moduleService.updateModule(module._id, {
            ...module, editing: true
        }).then(status => dispatch({
            type: "UPDATE_MODULE",
            module: {...module, editing: true}
        })),
    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(status => dispatch({
                type: "DELETE_MODULE",
                module: module
            })),
    createModule: (course) =>
        moduleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => dispatch({
            type: "CREATE_MODULE",
            module: actualModule
        })),
    updateModule: (module) =>
        dispatch({
            type: "UPDATE_MODULE",
            module: module
        }),
    // moduleService.updateModule(module._id, module)
    //   .then(status => dispatch({
    //     type: "UPDATE_MODULE",
    //     module: module
    //   }))
    selectModule: (module) => {
        dispatch({
            type: "SELECT_MODULE",
            moduleId: module._id
        });
        dispatch({
            type: "CLEAR_TOPIC"
        })
    }

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ModuleListComponent)